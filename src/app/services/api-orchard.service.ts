import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
})
export class ApiOrchardService {
    private baseUrl?: string;

    constructor(private http: HttpClient) {
        this.baseUrl = "https://localhost:7241";
    }

    // TODO: Need to hook this up to orchard CMS
    getData(): any {
        console.log('Function Called');
        return this.http.get<any>(this.baseUrl + '');
    }
}