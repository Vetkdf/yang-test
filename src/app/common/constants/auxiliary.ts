import $ from "jquery";
import ConstantsList from './config';

export class Auxiliary {

  public ControlHeight(id:string = "#content"):void {
    $(id).css("min-height", $(window).height() - ConstantsList.pageHeight);
  }

}
