import { Component, Injector } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { BasePage } from '../base-page/base-page';
import { CustomerAddress } from '../../services/customer-address';
import { Zone } from '../../services/zone';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { NativeGeocoder, NativeGeocoderResult, NativeGeocoderOptions } from '@ionic-native/native-geocoder/ngx';


@Component({
  selector: 'address-add',
  templateUrl: './address-add.html',
  styleUrls: ['./address-add.scss']
})
export class AddressAddPage extends BasePage {

  public form: FormGroup;
  public zones: Zone[] = [];
  public subzones: Zone[] = [];
  public country: any;
  public state: any;
  public pincode: any;
  public city: any;
  public address: any;

  constructor(injector: Injector,
    private zoneService: Zone,
    private customerAddressService: CustomerAddress,
    private geolocation: Geolocation, 
    private nativeGeocoder: NativeGeocoder) {
    super(injector);
  }

  ngOnInit() {
    this.setupForm();
  }

  enableMenuSwipe(): boolean {
    return false;
  }

  ionViewDidEnter() {
    this.loadZones();
  }

  setupForm() {
    this.form = new FormGroup({
      zone: new FormControl(null, Validators.required),
      subzone: new FormControl(null, Validators.required),
      city: new FormControl('', Validators.required),
      zipcode: new FormControl('', Validators.required),
      address: new FormControl('', Validators.required),
      name: new FormControl('', Validators.required),
      phone: new FormControl('', Validators.required),
      isDefault: new FormControl(false),
    });
  }

  onDismiss(address: CustomerAddress = null) {
    this.modalCtrl.dismiss(address);
  }

  async loadZones() {
    try {
      this.zones = await this.zoneService.load({ type: 'Parent' });
    } catch (error) {
      console.warn(error.message);
    }
  }

  async onZoneChanged() {
    try {
      this.form.controls.subzone.setValue(null);
      this.subzones = await this.zoneService.load({ parent: this.form.value.zone });
    } catch (error) {
      console.warn(error.message);
    }
  }

  async onSubmit() {

    if (this.form.invalid) {
      return this.translate.get('INVALID_FORM').subscribe(str => this.showToast(str));
    }

    try {

      await this.showLoadingView({ showOverlay: false });
      
      const formData = Object.assign({}, this.form.value);
      const address = await this.customerAddressService.create(formData);
      
      this.showContentView();
      this.onDismiss(address);
      
    } catch (error) {
      this.showContentView();
      this.translate.get('ERROR_NETWORK').subscribe(str => this.showToast(str));
    }

  }

  checkingLocation(){
    this.geolocation.getCurrentPosition().then((resp) => {
       console.log(resp.coords.latitude)
       console.log(resp.coords.longitude)
       let options: NativeGeocoderOptions = {
        useLocale: true,
        maxResults: 5
    };
    this.nativeGeocoder.reverseGeocode(resp.coords.latitude, resp.coords.longitude, options)
      .then((result: NativeGeocoderResult[]) => {
        this.country = JSON.stringify(result[0].countryName).replace(/\"/g, "");
        this.state = JSON.stringify(result[0].administrativeArea).replace(/\"/g, "");
        this.pincode = JSON.stringify(result[0].postalCode).replace(/\"/g, "");
        this.city = JSON.stringify(result[0].subAdministrativeArea).replace(/\"/g, "");
        this.address =  JSON.stringify(result[0].thoroughfare).replace(/\"/g, "") + " " + JSON.stringify(result[0].subAdministrativeArea).replace(/\"/g, "") + " " + JSON.stringify(result[0].subLocality).replace(/\"/g, "") + JSON.stringify(result[0].subThoroughfare).replace(/\"/g, "");

        // document.write(country);
        // document.write(JSON.stringify(result[0]))
      })
      .catch((error: any) => console.log(error));
      }).catch((error) => {
      console.log('Error getting location', error);
      });
  }
  

}
