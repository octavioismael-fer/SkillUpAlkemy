import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { User } from '@core/model/interfaces';
import { TransactionsService } from '@core/services/banco/transactions.service';
import { BaseServicesService } from '@core/services/base-service';
import { UserDataService } from '@core/services/user-data.service';
import { TransactionsComponent } from '@shared/components/formTransactions/transactions.component';
import { EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'ab-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss'],
})
export class ContactsComponent implements OnInit {
  displayedColumns: string[] = ['first_name', 'email', 'enviar'];
  length = 100;
  pageSize = 10;
  dataSource!: MatTableDataSource<User[]>;
  idAccount!: number;
  enviarDinero!: FormGroup;
  animal!: string;
  name!: string;

  @Output() onId = new EventEmitter<number>()

  @ViewChild(MatPaginator, { static: true }) paginator!: MatPaginator;

  constructor(
    private base: BaseServicesService,
    private modalS: TransactionsService,
    public dialog: MatDialog,
    private userData: UserDataService,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit(): void {
    this.getUser();
    this.enviarDinero = this.formBuilder.group({
      amount: ['', [Validators.required]],
      type: ['', [Validators.required]],
      concept: ['', [Validators.required]],
    });
  }

  getUser() {
    this.base.getUsers().subscribe((res: any) => {
      const { data, nextPage } = res;
      this.dataSource = new MatTableDataSource(data);
      this.dataSource.paginator = this.paginator;
    });
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  modalTransferir(id:any) {
    this.idAccount = id
    this.dialog.open(TransactionsComponent);
  }
}
