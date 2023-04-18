import { Controller, Get } from '@nestjs/common';
import mysqldump from 'mysqldump';

@Controller('backup')
export class BackupController {
    @Get()
    async exportDatabase() {
        try {
            await mysqldump({
                connection: {
                    host: 'localhost',
                    user: 'root',
                    password: 'daniel',
                    database: 'darek',
                },
                dumpToFile: 'C:/Users/zeaze/Desktop/backup.sql',
            });
            return { message: 'Database export successful' };
        } catch (error) {
            return { error: 'Database export failed' };
        }
    }
}
