import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
})
export class ApiOrchardService {
    private baseUrl?: string;

    constructor(private http: HttpClient) {
        this.baseUrl = "https://localhost:7241/resources/api/";
    }

    getArticles(): any {
        return this.http.get<any>(this.baseUrl + 'Home/GetAllCustomArticles');
    }

    getCustomStyles(): any {
        return this.http.get<any>(this.baseUrl + 'Home/GetAllCustomStyles');

    }
}