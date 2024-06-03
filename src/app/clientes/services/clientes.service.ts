import {inject, Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ClientesService {
  httpClient = inject(HttpClient)

  getAllClientes() {
    return this.httpClient.get<Cliente[]>("http://localhost:8080/cliente")
  }

  getClienteById(id: number) {
    return this.httpClient.get<Cliente>(`http://localhost:8080/cliente/${id}`)
  }

  postCliente(cliente: Cliente) {
    return this.httpClient.post<Cliente>('http://localhost:8080/cliente', cliente)
  }

  deleteCliente(id: number) {
    return this.httpClient.delete<void>(`http://localhost:8080/cliente/${id}`)
  }

  editCliente(id: number, cliente: Cliente) {
    this.httpClient.put<Cliente>(`http://localhost:8080/cliente/${id}`, cliente)
  }
}
