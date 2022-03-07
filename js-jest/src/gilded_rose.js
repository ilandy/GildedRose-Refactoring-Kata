class Item {
  constructor(name, sellIn, quality) {
    this.name = name;
    this.sellIn = sellIn;
    this.quality = quality;
  }
}

class Shop {
  constructor(items = []) {
    this.items = items;
  }
  updateQuality() {
    this.items.every((item) => updateItemQuality(item));

    function updateItemQuality(item) {
      if (item.name === "Sulfuras, Hand of Ragnaros") {
        return
      }
      if ( item.name === "Aged Brie") {
        increaseQuality(item)
      } else if (item.name === "Backstage passes to a TAFKAL80ETC concert") {
        if (item.quality < 50) {
          item.quality = item.quality + 1;
          if (item.sellIn < 11) {
            increaseQuality(item)
          }
          if (item.sellIn < 6) {
            increaseQuality(item)
          }
        }
      } else {
        if (item.quality > 0) {
          item.quality = item.quality - 1;
        }
      }

      item.sellIn = item.sellIn - 1;

      if (item.sellIn < 0) {
        if (item.name === "Aged Brie") {
          increaseQuality(item)
        } else {
          if (item.name === "Backstage passes to a TAFKAL80ETC concert") {
            item.quality = item.quality - item.quality;
          } else {
            if (item.quality > 0) {
            item.quality = item.quality - 1;
            }
          }
        }
      }
    }
    
    function increaseQuality (item) {
      if (item.quality < 50) {
        item.quality = item.quality + 1;
      }
    }

    return this.items;
  }

  
}

module.exports = {
  Item,
  Shop,
};
