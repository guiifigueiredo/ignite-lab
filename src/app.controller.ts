import { Controller, Get, Post, Body } from '@nestjs/common';
import { randomUUID } from 'crypto';
import { CreateNotification } from './create-notification-body';
import { PrismaService } from './prisma.service';

@Controller('notifications')
export class AppController {
  constructor(private readonly prisma: PrismaService) {}

  @Get()
  list() {
    return this.prisma.notification.findMany();
  }

  @Post()
  async create(@Body() body: CreateNotification) {
    const { recipientId, content, category } = body;
    console.log(body);
    await this.prisma.notification.create({
      data: {
        id: randomUUID(),
        recipientId,
        content,
        category,
      },
    });
  }
}
