import { Component } from '@angular/core';
import {ClientesListComponent} from "../../clientes-list/clientes-list.component";

@Component({
  selector: 'app-get-all-clientes',
  standalone: true,
  imports: [
    ClientesListComponent
  ],
  templateUrl: './get-all-clientes.component.html',
  styleUrl: './get-all-clientes.component.css'
})
export class GetAllClientesComponent {

}
