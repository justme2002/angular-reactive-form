import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dummy'
})
export class DummyPipe implements PipeTransform {

  transform(value: string, ...args: unknown[]): unknown {
    return `${value.substring(0, Number(args))}...`
  }
}
