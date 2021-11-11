// Module Manager for registering the modules of the chart
import {Draggable} from '@shopify/draggable';
// Bullet Graph Module
import { IgcRadialGaugeCoreModule } from 'igniteui-webcomponents-gauges';
import { IgcRadialGaugeModule } from 'igniteui-webcomponents-gauges';

// register the modules
Draggable.register(
    IgcRadialGaugeCoreModule,
    IgcRadialGaugeModule
);