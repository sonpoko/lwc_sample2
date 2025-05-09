import { LightningElement, api } from 'lwc';

export default class DataTableComponent extends LightningElement {
    @api someInput; 

    data = [
        { id: '1', status: 'XXXXXXX', limit: '2025-05-31', toOrder: '株式会社マッシュマトリックス', toDeliver: '株式会社マッシュマトリックス', productList: '商品A,商品B,商品C,商品D,商品E' },
        { id: '2', status: 'XXXXXXX', limit: '2025-05-31', toOrder: '株式会社マッシュマトリックス', toDeliver: '株式会社マッシュマトリックス', productList: '商品A,商品B,商品C,商品D,商品E' },
        { id: '3', status: 'XXXXXXX', limit: '2025-05-31', toOrder: '株式会社マッシュマトリックス', toDeliver: '株式会社マッシュマトリックス', productList: '商品A,商品B,商品C,商品D,商品E' }
    ];
}
