import { Component, OnInit } from '@angular/core';
import { ListarComponent } from '../listar/listar.component';
import { WebService } from '../web.service';

@Component({
  selector: 'app-cadastrar',
  templateUrl: './cadastrar.component.html',
  styleUrls: ['./cadastrar.component.css']
})
export class CadastrarComponent implements OnInit {

  produto = {
    title: "",
    price: 0.0,
    description:""
  };

  constructor(private web : WebService) { }

  cadastrar(){
    this.web.cadastrarProduto(this.produto).subscribe( res => {
      res.ok ? alert("Cadastro Realizado com Sucesso") : alert ("Cadastro não realizado");
    });
  }

  ngOnInit(): void {
  }

}
