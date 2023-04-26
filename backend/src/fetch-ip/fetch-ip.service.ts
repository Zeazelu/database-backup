import { Injectable } from '@nestjs/common';
import axios from 'axios'; // importujemy bibliotekę axios, która będzie nam pomagać w pobieraniu danych

@Injectable()
export class FetchIpService {
    async fetchDataFromApi() {
        const response = await axios.get('http://api.ipify.org/?format=json'); // wysyłamy zapytanie GET na podany URL i oczekujemy odpowiedzi w formacie JSON
        return response.data; // zwracamy jedynie część danych (bez nagłówka ani innych metadanych), którą przechowuje właściwość .data obiektu odpowiedzi
      }
}
