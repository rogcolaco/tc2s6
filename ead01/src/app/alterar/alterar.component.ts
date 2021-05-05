import { Component, Input, OnInit } from '@angular/core';
import { Produto } from '../Produto';
import { WebService } from '../web.service';

@Component({
  selector: 'app-alterar',
  templateUrl: './alterar.component.html',
  styleUrls: ['./alterar.component.css']
})
export class AlterarComponent implements OnInit {

  @Input() produtoAlterar : Produto | undefined;

  constructor( private web : WebService) { }

  ngOnInit(): void {
  }

  recarregar(): void{
    alert("Operação Cancelada");
    location.reload();
  }

  alterar(){
    this.web.alterarProduto(this.produtoAlterar).subscribe( res => {
      res.ok ? alert("Item alterado com Sucesso") : alert ("Erro ao alterar o item selecionado");
      location.reload();
    });

  }

}
