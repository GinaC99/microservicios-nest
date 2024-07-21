import { Module } from '@nestjs/common';
import { ProductsModule } from './products/products.module';
import { ConfigModule } from '@nestjs/config';
import { config } from 'dotenv';


@Module({
  imports: [
    ProductsModule,
    ConfigModule.forRoot({
      isGlobal: true,
      load: [config]
    })
  
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
