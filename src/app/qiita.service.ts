import { Injectable } from '@angular/core';
import { Qiita } from './qiita';
import { QIITA } from './mock-qiita';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class QiitaService {

  constructor() { }

  getQiita(): Observable<Qiita[]> {
    const qiita = of(QIITA);
    return qiita;
  }
}
