import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UserModule } from './user/user.module';
import { ConfigModule } from '@nestjs/config';
@Module({
  imports: [
    // MongooseModule.forRoot('mongodb://root:password@localhost', {
    //   dbName: 'users',
    //   connectionName: 'users',
    // }),
    ConfigModule.forRoot({
      envFilePath: '.env',
      isGlobal: true,
    }),
    MongooseModule.forRoot(process.env.DB_URI, {
      dbName: 'users',
    }),
    UserModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
