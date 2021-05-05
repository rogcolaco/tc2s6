import { Component, Input, OnInit } from '@angular/core';
import { ListarComponent } from '../listar/listar.component';
import { Produto } from '../Produto';
import { WebService } from '../web.service';

@Component({
  selector: 'app-deletar',
  templateUrl: './deletar.component.html',
  styleUrls: ['./deletar.component.css']
})
export class DeletarComponent implements OnInit {

  @Input() produtoSelecionado : Produto | undefined;

  constructor(private web : WebService) { }

  recarregar() : void{
    alert("Operação Cancelada");
    location.reload();
  }

  excluir(){
    this.web.exluirProduto(this.produtoSelecionado).subscribe( res => {
      res.ok ? alert("Item deletado com sucesso com Sucesso") : alert ("Erro ao deletar o item selecionado");
      location.reload();
    });
  }

  ngOnInit(): void {
  }

}
