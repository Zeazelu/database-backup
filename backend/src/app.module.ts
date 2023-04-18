import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BackupModule } from './backup/backup.module';

@Module({
  imports: [TypeOrmModule.forRoot({
    type: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'root',
    password: 'daniel',
    database: 'darek',
    entities: [],
    synchronize: true,
  }), BackupModule
],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
