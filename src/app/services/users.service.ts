import { Injectable, signal } from '@angular/core';
import { UsersResponse } from '@interfaces/req-response.interface';

interface State {
  users: UsersResponse[];
  loading: boolean;
}

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  #state = signal<State>({
    loading: true,
    users: [],
  });
  constructor() {
    console.log('Loaded data');
  }
}
