import { Inject, Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import { Cliente } from "./cliente";

@Injectable()
export class ClienteService {
  private headers: HttpHeaders = new HttpHeaders({ 'Content-Type': 'application/json' });

  constructor(@Inject('environment') private environment: any, private httpClient: HttpClient) { }

  public getClientes(): Observable<Array<Cliente>> {
    return this.httpClient.get<Array<Cliente>>(`${this.environment.serviceUrl}/api/v1/cliente`, { headers: this.headers });
  }

  public salvar(cliente: Cliente): Observable<Cliente> {
    return this.httpClient.post<Cliente>(`${this.environment.serviceUrl}/api/v1/cliente`, cliente, { headers: this.headers });
  }
}