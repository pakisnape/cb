import { Story, Meta } from '@storybook/angular/types-6-0';
import { TableComponent } from '../projects/pattern-lib/src/lib/table/table.component';
const FolderImg = require('../projects/pattern-lib/static/assets/icons/categories/folder.svg');
const SendImg = require('../projects/pattern-lib/static/assets/icons/actions/send.svg');
const MoreImg = require('../projects/pattern-lib/static/assets/icons/actions/more.svg');
const progressImg = require('../projects/pattern-lib/static/assets/icons/flag.svg');
const stagImg = require('../projects/pattern-lib/static/assets/icons/red-warning.svg');
const linkedImg = require('../projects/pattern-lib/static/assets/icons/link.svg');

export default {
  title: 'Connectbase/Table',
  component: TableComponent,
  argTypes: {},
  parameters: { actions: { argTypesRegex: '^on.*' } },
} as Meta;

const Template: Story<TableComponent> = (args: TableComponent) => ({
  props: args,
});

export const Table = Template.bind({});
Table.args = {
  columns: [
    {
      key: 'status',
      label: '',
      type: 'status',
      sortable: false,
      className: 'bullets-col',
    },
    {
      key: 'account',
      label: 'Seller',
      type: 'normal',
      sortable: true,
      className: 'account-col',
    },
    {
      key: 'siteCompany',
      label: 'Site Company',
      type: 'normal',
      sortable: true,
      className: 'customer-col',
    },
    {
      key: 'stage',
      label: 'Stage',
      type: 'badge',
      sortable: true,
      className: 'stage-col',
    },
    {
      key: 'lastUpdated',
      label: 'Last Updated',
      type: 'normal',
      sortable: true,
      className: 'last-date-col',
    },
    {
      key: 'progress',
      label: 'Progress',
      type: 'img-progress',
      sortable: true,
      className: 'progress-col',
    },
    {
      key: 'assigned',
      label: 'Assigned',
      type: 'avatar',
      sortable: true,
      className: 'assigned-col',
    },
    {
      key: 'action',
      label: '',
      showGear: false,
      type: 'action',
      sortable: false,
      className: 'actions-col',
    },
  ],

  actions: [
    {
      label: 'Send',
      img: SendImg,
      className: 'icon-btn',
      isButton: true,
      value: 'send',
    },
    { label: 'More', img: MoreImg, className: 'icon-btn', isDropdown: true },
  ],

  rows: [
    {
      "id": "64bc16efeb96cd67fa4ee7da",
      "orderId": "11343",
      "isArchived": false,
      "linkedOrderId": null,
      "linked": {
        "img": null
      },
      "status": {
        "value": "sent"
      },
      "order": {
        "value": "ORDB-11343"
      },
      "account": {
        "value": "Reseller#AT&T - DEV"
      },
      "siteCompany": {
        "value": "MTT"
      },
      "stage": {
        "label": "Sent",
        "value": "sent",
        "img": "",
        "isPartiallyFilled": false
      },
      "lastUpdated": {
        "value": "Jul 24, 2023"
      },
      "endDate": {
        "value": "Jun 29, 2023",
        "badgeLabel": "Requested"
      },
      "progress": {
        "label": "0%",
        "value": "0%",
        "status": "sent",
        "img": ""
      },
      "category": {
        "value": "BroadBand"
      },
      "product": {
        "value": "Dynamic IP Broadband"
      },
      "speed": {
        "value": "300 Mbps"
      },
      "assigned": {
        "avatar": "purple",
        "value": "PP"
      },
      "action": [
        true,
        true
      ],
      "actionDropdownItems": [
        {
          "key": "View",
          "value": "view"
        },
        {
          "key": "Assign",
          "value": "assign"
        },
        {
          "key": "Share",
          "value": "share"
        }
      ]
    },
    {
      "id": "64be51f71936250ee226c129",
      "orderId": "11363",
      "isArchived": false,
      "linkedOrderId": null,
      "linked": {
        "img": null
      },
      "status": {
        "value": "completed"
      },
      "order": {
        "value": "ORDB-11363"
      },
      "account": {
        "value": "Reseller#AT&T - DEV"
      },
      "siteCompany": {
        "value": "Starbucks"
      },
      "stage": {
        "label": "Completed",
        "value": "completed",
        "isPartiallyFilled": false
      },
      "lastUpdated": {
        "value": "Jul 24, 2023"
      },
      "endDate": {
        "value": "Jun 29, 2023",
        "badgeLabel": "Requested"
      },
      "progress": {
        "label": "100%",
        "value": "100%",
        "status": "completed",
        "img": ""
      },
      "category": {
        "value": "BroadBand"
      },
      "product": {
        "value": "Broadband"
      },
      "speed": {
        "value": "5G"
      },
      "assigned": {
        "avatar": "gold",
        "value": "JP"
      },
      "action": [
        true,
        true
      ],
      "actionDropdownItems": [
        {
          "key": "View",
          "value": "view"
        },
        {
          "key": "Assign",
          "value": "assign"
        },
        {
          "key": "Share",
          "value": "share"
        }
      ]
    },
    {
      "id": "64bdfe6ae780464e56dbfc2c",
      "orderId": "11350",
      "isArchived": false,
      "linkedOrderId": null,
      "linked": {
        "img": null
      },
      "status": {
        "value": "inprogress"
      },
      "order": {
        "value": "ORDB-11350"
      },
      "account": {
        "value": "Seller#AT&T - DEV"
      },
      "siteCompany": {
        "value": "Starbucks"
      },
      "stage": {
        "label": "In Progress",
        "value": "inprogress",
        "isPartiallyFilled": false
      },
      "lastUpdated": {
        "value": "Jul 24, 2023"
      },
      "endDate": {
        "value": "Jun 29, 2023",
        "badgeLabel": "Requested"
      },
      "progress": {
        "label": "40%",
        "value": "40%",
        "status": "inprogress",
        "img": ""
      },
      "category": {
        "value": "BroadBand"
      },
      "product": {
        "value": "Broadband"
      },
      "speed": {
        "value": "5G"
      },
      "assigned": {
        "avatar": "blue",
        "value": "VK"
      },
      "action": [
        true,
        true
      ],
      "actionDropdownItems": [
        {
          "key": "View",
          "value": "view"
        },
        {
          "key": "Assign",
          "value": "assign"
        },
        {
          "key": "Share",
          "value": "share"
        }
      ]
    },
    {
      "id": "64bdfe48e780464e56dbfc28",
      "orderId": "11349",
      "isArchived": false,
      "linkedOrderId": null,
      "linked": {
        "img": null
      },
      "status": {
        "value": "confirmed"
      },
      "order": {
        "value": "ORDB-11349"
      },
      "account": {
        "value": "Seller#AT&T - DEV"
      },
      "siteCompany": {
        "value": "Starbucks"
      },
      "stage": {
        "label": "Confirmed",
        "value": "confirmed",
        "isPartiallyFilled": false
      },
      "lastUpdated": {
        "value": "Jul 24, 2023"
      },
      "endDate": {
        "value": "Jun 29, 2023",
        "badgeLabel": "Requested"
      },
      "progress": {
        "label": "60%",
        "value": "60%",
        "status": "confirmed",
        "img": ""
      },
      "category": {
        "value": "BroadBand"
      },
      "product": {
        "value": "Broadband"
      },
      "speed": {
        "value": "5G"
      },
      "assigned": {
        "avatar": "gold",
        "value": "AT"
      },
      "action": [
        true,
        true
      ],
      "actionDropdownItems": [
        {
          "key": "View",
          "value": "view"
        },
        {
          "key": "Assign",
          "value": "assign"
        },
        {
          "key": "Share",
          "value": "share"
        }
      ]
    },
    {
      "id": "64bdfde9e780464e56dbfc24",
      "orderId": "11348",
      "isArchived": false,
      "linkedOrderId": null,
      "linked": {
        "img": null
      },
      "status": {
        "value": "delivered"
      },
      "order": {
        "value": "ORDB-11348"
      },
      "account": {
        "value": "Reseller#AT&T - DEV"
      },
      "siteCompany": {
        "value": "MCDonalds"
      },
      "stage": {
        "label": "Delivered",
        "value": "delivered",
        "isPartiallyFilled": false
      },
      "lastUpdated": {
        "value": "Jul 24, 2023"
      },
      "endDate": {
        "value": "Jun 29, 2023",
        "badgeLabel": "Requested"
      },
      "progress": {
        "label": "80%",
        "value": "80%",
        "status": "delivered",
        "img": ""
      },
      "category": {
        "value": "BroadBand"
      },
      "product": {
        "value": "Dynamic IP Broadband"
      },
      "speed": {
        "value": "2G"
      },
      "assigned": {
        "avatar": "blue",
        "value": "MK"
      },
      "action": [
        true,
        true
      ],
      "actionDropdownItems": [
        {
          "key": "View",
          "value": "view"
        },
        {
          "key": "Assign",
          "value": "assign"
        },
        {
          "key": "Share",
          "value": "share"
        }
      ]
    },
    {
      "id": "64bdfde6e780464e56dbfc20",
      "orderId": "11347",
      "isArchived": false,
      "linkedOrderId": null,
      "linked": {
        "img": null
      },
      "status": {
        "value": "pre-order"
      },
      "order": {
        "value": "ORDB-11347"
      },
      "account": {
        "value": "Reseller#AT&T - DEV"
      },
      "siteCompany": {
        "value": "Starbucks"
      },
      "stage": {
        "label": "Pre-Order",
        "value": "pre-order",
        "img": "./assets/icons/red-warning.svg",
        "isPartiallyFilled": false
      },
      "lastUpdated": {
        "value": "Jul 24, 2023"
      },
      "endDate": {
        "value": "Jun 29, 2023",
        "badgeLabel": "Requested"
      },
      "progress": {
        "label": "0%",
        "value": "0%",
        "status": "pre-order",
        "img": ""
      },
      "category": {
        "value": "BroadBand"
      },
      "product": {
        "value": "Broadband"
      },
      "speed": {
        "value": "5G"
      },
      "assigned": {
        "avatar": "orange",
        "value": "AV"
      },
      "action": [
        true,
        true
      ],
      "actionDropdownItems": [
        {
          "key": "View",
          "value": "view"
        },
        {
          "key": "Assign",
          "value": "assign"
        },
        {
          "key": "Share",
          "value": "share"
        }
      ]
    },
    {
      "id": "64bd17b7eb96cd67fa4ee7de",
      "orderId": "11344",
      "isArchived": false,
      "linkedOrderId": null,
      "linked": {
        "img": null
      },
      "status": {
        "value": "cancelled"
      },
      "order": {
        "value": "ORDB-11344"
      },
      "account": {
        "value": "AccountBoth - DEV"
      },
      "siteCompany": {
        "value": "MTT"
      },
      "stage": {
        "label": "Cancelled",
        "value": "cancelled",
        "isPartiallyFilled": false
      },
      "lastUpdated": {
        "value": "Jul 23, 2023"
      },
      "endDate": {
        "value": "Jun 29, 2023",
        "badgeLabel": "Requested"
      },
      "progress": {
        "label": "0%",
        "value": "0%",
        "status": "cancelled",
        "img": ""
      },
      "category": {
        "value": "BroadBand"
      },
      "product": {
        "value": "Dynamic IP Broadband"
      },
      "speed": {
        "value": "300 Mbps"
      },
      "assigned": {
        "avatar": "purple",
        "value": "DG"
      },
      "action": [
        true,
        true
      ],
      "actionDropdownItems": [
        {
          "key": "View",
          "value": "view"
        },
        {
          "key": "Assign",
          "value": "assign"
        },
        {
          "key": "Share",
          "value": "share"
        }
      ]
    }
  ],

  actionDropdownItems: [
    { key: 'Assign', value: 'assign' },
    { key: 'Share', value: 'share' },
    { key: 'View', value: 'view' },
  ],
  sortable: true,

  sort: {
    column: 'lastUpdated',
    direction: 1,
  }
};
