import { Component, OnInit } from '@angular/core';
import { Qiita } from '../qiita';
import { QIITA } from '../mock-qiita';
import { QiitaService } from '../qiita.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  qiita: Qiita[] = [];

  constructor(private qiitaService: QiitaService) { }

  ngOnInit(): void {
    this.getQiita();
  }

  getQiita(): void {
    this.qiitaService.getQiita()
      .subscribe(qiita => this.qiita = qiita);
  }
}
