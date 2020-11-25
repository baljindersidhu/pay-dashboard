import { Component, OnInit } from '@angular/core';
import {SidenavAction} from "src/app/app-types/sidenav-action";

@Component({
	selector: 'app-sidenav',
	templateUrl: './sidenav.component.html',
	styleUrls: ['./sidenav.component.less']
})
export class SidenavComponent implements OnInit {

	actions: Array<SidenavAction>;

	constructor() { }

	ngOnInit(): void {
		this.setActions();
	}

	private setActions(){
		this.actions = [
			{icon: "ri-home-3", active: false},
			{icon: "ri-message-2", active: false},
			{icon: "ri-chat-voice", active: false},
			{icon: "ri-user-4", active: false},
			{icon: "ri-upload-cloud-2", active: false},
			{icon: "ri-settings-3", active: false}
		].map(
			action => (
					{...action, 
						inactiveIconSrc: action.icon + "-line", 
						activeIconSrc: action.icon + "-fill"
					}
				)
			);

		this.actions[0].active = true;
	}

}
