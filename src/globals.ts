import { Injectable } from '@angular/core';

@Injectable()
export class Globals {
	token: string = "0.0.0";

	setToken(tokenVar: string) {
		this.token=tokenVar;
	}

	getToken() {
		return(this.token);
	}
}
