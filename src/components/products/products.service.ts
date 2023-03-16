import { BadRequestException, Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';
import { CreateProductDto, UpdateProductDto } from './dto';
import { requestErrorThrow } from '../../utils/helpers/request.errors';

@Injectable()
export class ProductsService {
  constructor(private prismaService: PrismaService) {
  }

  async findAll() {
    try {
      return await this.prismaService.product.findMany();
    } catch (err) {
      requestErrorThrow(err);
    }
  }

  async findOne(id: string) {
    try {
      return await this.prismaService.product.findUnique({
        where: {
          id,
        },
        include: {
          category: true,
          supplier: true,
          manufacturer: true,
        },
      });
    } catch (err) {
      requestErrorThrow(err);
    }
  }

  async create(productDto: CreateProductDto) {
    try {
      return await this.prismaService.product.create({
        data: {
          name: productDto.name,
          stock: productDto.stock,
          price: productDto.price,
          images: productDto.images.map((image) => image.url),
          categoryId: parseInt(productDto.categoryId),
          supplierId: productDto.supplierId,
          manufacturerId: productDto.manufacturerId,
        },
      });
    } catch (err) {
      requestErrorThrow(err);
    }
  }

  async update(id: string, productDto: UpdateProductDto) {
    try {
      return await this.prismaService.product.update({
        where: {
          id,
        },
        data: {
          name: productDto.name,
          stock: productDto.stock,
          price: productDto.price,
          images: productDto.images?.map((image) => image.url),
          categoryId: productDto.categoryId,
          supplierId: productDto.supplierId,
          manufacturerId: productDto.manufacturerId,
        },
        include: {
          category: true,
          supplier: true,
          manufacturer: true,
        },
      });
    } catch (err) {
      requestErrorThrow(err);
    }
  }

  async delete(id: string) {
    try {
      return await this.prismaService.product.delete({
        where: {
          id,
        },
      });
    } catch (err) {
      requestErrorThrow(err);
    }
  }

  async addImage(id: string, imageUrl: string) {
    try {
      const product = await this.prismaService.product.findUnique({
        where: {
          id,
        },
        select: {
          images: true,
        },
      });
      if (product?.images?.includes(imageUrl)) {
        return await this.findOne(id);
      }
      return await this.prismaService.product.update({
        where: {
          id,
        },
        data: {
          images: {
            push: imageUrl,
          },
        },
      });
    } catch (err) {
      requestErrorThrow(err);
    }
  }

  async addImages(id: string, imageUrls: string[]) {
    try {
      return imageUrls.forEach((url) => this.addImage(id, url));
    } catch (err) {
      requestErrorThrow(err);
    }
  }

  async removeImages(id: string, imageUrls: string[]) {
    try {
      const product = await this.prismaService.product.findUnique({
        where: { id },
      });

      const updatedImages = product?.images?.filter(
        (image) => !imageUrls?.includes(image),
      );

      return await this.prismaService.product.update({
        where: { id },
        data: { images: updatedImages },
      });
    } catch (err) {
      requestErrorThrow(err);
    }
  }

}
