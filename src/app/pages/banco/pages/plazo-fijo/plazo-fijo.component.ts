import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { FixedDepositCreated, FixedTerms } from '@core/model/user.data';
import { BankAccountService } from '@core/services/banco/bank-account.service';
import { UserDataService } from '@core/services/user-data.service';

@Component({
  selector: 'ab-plazo-fijo',
  templateUrl: './plazo-fijo.component.html',
  styleUrls: ['./plazo-fijo.component.scss']
})
export class PlazoFijoComponent implements OnInit {
  displayedColumns: string[] = ['accountId', 'userId', 'id', 'amount', 'closing_date','creation_date', 'intereses', 'eliminar'];


  plazosFijos!:FixedDepositCreated[]
  total: number = 0


  plazosForm!: FormGroup;
  dataSource!:MatTableDataSource<FixedTerms[]>
  dinero:any;
  resultado:any
  plata:any
  days:any
  interes:any = []

  @ViewChild(MatPaginator, {static:true}) paginator!:MatPaginator




  constructor(private plazos:UserDataService, private formBuilder: FormBuilder,
    private bankAccountService: BankAccountService) { }

  ngOnInit(): void {
    this.plazosForm = this.formBuilder.group({
      userId: ['', [Validators.required]],
      accountId: ['', [Validators.required]],
      amount: ['', [Validators.required]],
      creation_date: ['', [Validators.required]],
      closing_date: ['', [Validators.required]]
    })

    this.PostplazosFijos()
    this.getPlazos()
    this.getMoneyAccount()
  }
  PostplazosFijos(){
    const plazos: FixedTerms = this.plazosForm.value;
    this.plazos.postFixedDeposits(plazos).subscribe(data => {
      const {amount} = data
      if(amount > this.dinero){
      } else {
        this.resultado = this.dinero - amount
      }
      this.getPlazos()
    })
  }

  getMoneyAccount() {
    this.bankAccountService.BAccountsMe().subscribe((list: any) => {
     this.dinero = list
     this.dinero = this.dinero.forEach((cuenta:any) => {
      const {money, id} = cuenta
      this.plata = {money, id}
     })
    })
  }

  eliminarPlazo(id:number){
    this.plazos.deleteFixedDeposits(id).subscribe(data => {
      this.getPlazos()
    })
  }

  getPlazos(){
    this.plazos.getFixedDeposits().subscribe(lista => {
      this.plazosFijos = [...lista.data]
      this.total = this.plazosFijos.reduce((counter, item) => Number(item.amount) + counter, 0);

      this.days = this.plazosFijos.map(item =>
        Math.round(
        Math.ceil(
          new Date(item.closing_date).getTime() -
          new Date(item.createdAt).getTime()
          ) / (1000 * 60 * 60 * 24))
        );

        this.interes = this.plazosFijos.map(item => {
          return {
            ...item,
            interes: item.amount * 0.01 * Math.round(
              Math.ceil(
                new Date(item.closing_date).getTime() -
                new Date(item.createdAt).getTime()
                ) / (1000 * 60 * 60 * 24))

          }
        })

      const {data} = lista
      this.dataSource = new MatTableDataSource(this.interes)
    })
  }

}
