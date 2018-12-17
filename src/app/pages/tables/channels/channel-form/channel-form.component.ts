import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ViewCell, Cell, DefaultEditor, Editor } from 'ng2-smart-table';
import { NbWindowRef,NbWindowService,NbWindowConfig  } from '@nebular/theme';
import { Observable } from 'rxjs';
import { Channel } from '../../../../@core/store/models';
import { ChannelsService } from '../../../../@core/services/channels/channels.service';

@Component({
 selector: 'nb-select-sizes',
  templateUrl: './select-channels.form.html',
  styles: [`channel-form.component.scss`],
})

export class ThingsFormComponent {
  name: string;
  channelId : number;
  thingsList: Array<{name: string}> = []; 
  constructor(
	public windowRef: NbWindowRef,
	private service: ChannelsService,
	) {}


  channels: Observable<Channel[]>;


  ngOnInit() {

    this.service.getChannels().subscribe((payload: any) => {
        this.channels = payload
        for (let channel of payload) {
        	const id = channel.id;
	        if ( this.windowRef.config.context['name'] == channel['name'] ) {
        		if ('connected' in channel) {
            			const devices = channel['connected'];
				for (let device of devices) {
					console.log("id: ",id , "name: ", channel['name'], " ,device", device.name);
					this.thingsList.push({name: device.name });
            		   	}
			}
        	}
    	}
	console.log(this.thingsList);
    });
  }


  close() {
    this.windowRef.close();
  }

  //onDisConnectChannels() {
//	console.log(this.selectedChannels);
 // }
}
