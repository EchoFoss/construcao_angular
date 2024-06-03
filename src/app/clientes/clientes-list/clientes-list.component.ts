import {Component, inject, OnDestroy} from '@angular/core';
import {ClientesService} from "../services/clientes.service";
import {Observable} from "rxjs";
import {AsyncPipe} from "@angular/common";

@Component({
  selector: 'app-clientes-list',
  standalone: true,
  imports: [
    AsyncPipe
  ],
  templateUrl: './clientes-list.component.html',
  styleUrl: './clientes-list.component.css'
})
export class ClientesListComponent {
  private clienteService = inject(ClientesService)
  clientesEncontrados$ = new Observable<Cliente[]>

  obterClientes = () => {
    this.clientesEncontrados$ = this.clienteService.getAllClientes();
  }

  cadastrarCliente(cliente: Cliente) {
    this.clienteService.postCliente(cliente.id, cliente)
  }

  constructor() {
    this.obterClientes()
  }
}
