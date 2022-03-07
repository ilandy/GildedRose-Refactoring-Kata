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
        return;
      }

      if (item.name === "Aged Brie") {
        upgradeAgedBrie(item)
      } else if (item.name === "Backstage passes to a TAFKAL80ETC concert") {
        upgradeBackstage(item)
      } else {
        upgradeNormalItem(item)
      }
    }

    function increaseQuality(item) {
      if (item.quality < 50) {
        item.quality = item.quality + 1;
      }
    }

    function decreaseQuality(item) {
      if (item.quality > 0) {
        item.quality = item.quality - 1;
      }
    }

    function upgradeAgedBrie (item) {
      item.sellIn = item.sellIn - 1;

      increaseQuality(item);
      if (item.sellIn < 0) increaseQuality(item);
    }

    function upgradeBackstage (item) {
      item.sellIn = item.sellIn - 1;

      increaseQuality(item);
      if (item.sellIn < 10) increaseQuality(item);
      if (item.sellIn < 5) increaseQuality(item);
      if (item.sellIn < 0) item.quality = item.quality - item.quality;
    }

    function upgradeNormalItem (item) {
      item.sellIn = item.sellIn - 1;
      decreaseQuality(item);
      if (item.sellIn < 0) {
        decreaseQuality(item);
      }
    }

    return this.items;
  }
}

module.exports = {
  Item,
  Shop,
};
