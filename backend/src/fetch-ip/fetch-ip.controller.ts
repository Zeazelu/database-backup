import { Controller, Get } from '@nestjs/common';
import { FetchIpService } from './fetch-ip.service';

@Controller('ip')
export class FetchIpController {
    constructor(private readonly fetchIpService: FetchIpService) {}

    @Get()
    async getIpAddress() {
    const ipAddress = await this.fetchIpService.fetchDataFromApi(); // wywołujemy funkcję fetchDataFromApi z serwisu ExampleService
    return { ip: ipAddress.ip }; // zwracamy obiekt z jednym polem `ip`, które zawiera wartość pola `ip` z pobranych danych
  }
}
