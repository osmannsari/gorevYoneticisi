import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { jqxSchedulerComponent } from 'jqwidgets-ng/jqxscheduler';

@Component({
  selector: 'app-aylik',
  templateUrl: './aylik.component.html',
  styleUrls: ['./aylik.component.css']
})
export class AylikComponent implements AfterViewInit {
  @ViewChild('scheduler', { static: false }) myScheduler: jqxSchedulerComponent;
  ngAfterViewInit() {
      this.myScheduler.ensureAppointmentVisible('id1');
  }
getWidth() : any {
  if (document.body.offsetWidth < 850) {
    return '90%';
  }
  
  return 850;
}

  generateAppointments() {
      let appointments = new Array();
      let appointment1 = {
          id: 'id1',
          description: '',
          location: '',
          subject: 'Mutfak malzemleri',
          calendar: 'Alışveriş',
          start: new Date(2020, 6, 15, 9, 0, 0),
          end: new Date(2020, 6, 18, 16, 0, 0)
      }
      let appointment2 = {
          id: 'id2',
          description: '',
          location: '',
          subject: 'Projeye devam et',
          calendar: 'İş',
          start: new Date(2020, 6, 20, 10, 0, 0),
          end: new Date(2020, 6, 22, 15, 0, 0)
      }
      let appointment3 = {
          id: 'id3',
          description: '',
          location: '',
          subject: 'Toplantıya katıl',
          calendar: 'İş',
          start: new Date(2020, 6, 23, 11, 0, 0),
          end: new Date(2020, 6, 28, 13, 0, 0)
      }
      let appointment4 = {
          id: 'id4',
          description: '',
          location: '',
          subject: 'Bilgisayar aksesuarları alınacak',
          calendar: 'Alışveriş',
          start: new Date(2020, 6, 10, 16, 0, 0),
          end: new Date(2020, 6, 12, 18, 0, 0)
      }
      let appointment5 = {
          id: 'id5',
          description: '',
          location: '',
          subject: 'Çocukları kursa bırak',
          calendar: 'Aile',
          start: new Date(2020, 6, 5, 15, 0, 0),
          end: new Date(2020, 6, 6, 17, 0, 0)
      }
      let appointment6 = {
          id: 'id6',
          description: '',
          location: '',
          subject: 'Piknik',
          calendar: 'Aile',
          start: new Date(2020, 6, 13, 12, 0, 0),
          end: new Date(2020, 6, 20, 14, 0, 0)
      }
      appointments.push(appointment1);
      appointments.push(appointment2);
      appointments.push(appointment3);
      appointments.push(appointment4);
      appointments.push(appointment5);
      appointments.push(appointment6);
      return appointments;
  };
  date: any = new jqx.date(2020, 7, 23);
  source: any =
  {
      dataType: 'array',
      dataFields: [
          { name: 'id', type: 'string' },
          { name: 'description', type: 'string' },
          { name: 'location', type: 'string' },
          { name: 'subject', type: 'string' },
          { name: 'calendar', type: 'string' },
          { name: 'start', type: 'date' },
          { name: 'end', type: 'date' }
      ],
      id: 'id',
      localData: this.generateAppointments()
  };
  dataAdapter: any = new jqx.dataAdapter(this.source);
  printButton: any = null;
  resources: any =
  {
      colorScheme: 'scheme01',
      dataField: 'calendar',
      source: new jqx.dataAdapter(this.source)
  };
  appointmentDataFields: any =
  {
      from: 'start',
      to: 'end',
      id: 'id',
      description: 'description',
      location: 'place',
      subject: 'subject',
      resourceId: 'calendar'
  };
  views: any[] =
  [
      'dayView',
      'weekView',
      'monthView'
  ];
  // called when the dialog is craeted.
  editDialogCreate = (dialog, fields, editAppointment) => {
      // hide repeat option
      fields.repeatContainer.hide();
      // hide status option
      fields.statusContainer.hide();
      // hide timeZone option
      fields.timeZoneContainer.hide();
      // hide color option
      fields.colorContainer.hide();
      fields.subjectLabel.html("İçerik");
      fields.locationLabel.html("Nerede");
      fields.fromLabel.html("Başlangıç");
      fields.toLabel.html("Bitiş");
      fields.resourceLabel.html("Konu");
      let buttonElement = document.createElement("BUTTON");
      buttonElement.innerText = 'Print';
      buttonElement.style.cssFloat = 'right';
      buttonElement.style.marginLeft = '5px';
      buttonElement.id = 'PrintButton';
      fields.buttons[0].appendChild(buttonElement);
      let printButton: jqwidgets.jqxButton = jqwidgets.createInstance('#PrintButton', 'jqxButton', {
          width: 50,
          height: 25
      });
      this.printButton = printButton;
      printButton.addEventHandler('click', function () {
          let appointment = editAppointment;
          if (!appointment && printButton.disabled) {
              return;
          }
          let appointmentContent =
              "<table class='printTable'>" +
              "<tr>" +
              "<td class='label'>İçerik</td>" +
              "<td>" + fields.subject.val() + "</td>" +
              "</tr>" +
              "<tr>" +
              "<td class='label'>Başlangıç</td>" +
              "<td>" + fields.from.val() + "</td>" +
              "</tr>" +
              "<tr>" +
              "<td class='label'>Bitiş</td>" +
              "<td>" + fields.to.val() + "</td>" +
              "</tr>" +
              "<tr>" +
              "<td class='label'>Nerede</td>" +
              "<td>" + fields.location.val() + "</td>" +
              "</tr>" +
              "<tr>" +
              "<td class='label'>Konu</td>" +
              "<td>" + fields.resource.val() + "</td>" +
              "</tr>"
              + "</table>";
          let newWindow = window.open('', '', 'width=800, height=500'),
              document = newWindow.document.open(),
              pageContent =
                  '<!DOCTYPE html>\n' +
                  '<html>\n' +
                  '<head>\n' +
                  '<meta charset="utf-8" />\n' +
                  '<title>jQWidgets Scheduler</title>\n' +
                  '<style>\n' +
                  '.printTable {\n' +
                  'border-color: #aaa;\n' +
                  '}\n' +
                  '.printTable .label {\n' +
                  'font-weight: bold;\n' +
                  '}\n' +
                  '.printTable td{\n' +
                  'padding: 4px 3px;\n' +
                  'border: 1px solid #DDD;\n' +
                  'vertical-align: top;\n' +
                  '}\n' +
                  '</style>' +
                  '</head>\n' +
                  '<body>\n' + appointmentContent + '\n</body>\n</html>';
          try {
              document.write(pageContent);
              document.close();
          }
          catch (error) {
          }
          newWindow.print();
      });
      
  };
  /**
  * called when the dialog is opened. Returning true as a result disables the built-in handler.
  * @param {Object} dialog - jqxWindow's jQuery object.
  * @param {Object} fields - Object with all widgets inside the dialog.
  * @param {Object} the selected appointment instance or NULL when the dialog is opened from cells selection.
  */
  editDialogOpen = (dialog, fields, editAppointment) => {
      if (!editAppointment && this.printButton) {
          this.printButton.setOptions({ disabled: true });
      }
      else if (editAppointment && this.printButton) {
          this.printButton.setOptions({ disabled: false });
      }
  };
  /**
  * called when the dialog is closed.
  * @param {Object} dialog - jqxWindow's jQuery object.
  * @param {Object} fields - Object with all widgets inside the dialog.
  * @param {Object} the selected appointment instance or NULL when the dialog is opened from cells selection.
  */
  editDialogClose = (dialog, fields, editAppointment) => {
  };
  /**
  * called when a key is pressed while the dialog is on focus. Returning true or false as a result disables the built-in keyDown handler.
  * @param {Object} dialog - jqxWindow's jQuery object.
  * @param {Object} fields - Object with all widgets inside the dialog.
  * @param {Object} the selected appointment instance or NULL when the dialog is opened from cells selection.
  * @param {jQuery.Event Object} the keyDown event.
  */
  editDialogKeyDown = (dialog?, fields?, editAppointment?) => {
  };
}