import csv
import os
from django.core.management.base import BaseCommand
from django.conf import settings
from brands import models as brand_models


class Command(BaseCommand):

    help = "Add new gi brands from datasheet"

    def add_arguments(self, parser):
        parser.add_argument("--list", help="Print Gi list", action="store_true")

    def get_image_path(self, brand):
        images_dir = os.path.join(settings.MEDIA_ROOT, "brand_photos")
        image_file_name = brand + ".png"
        return os.path.join(images_dir, image_file_name)

    def add_photo(self, brand, photo):
        photo_manager = brand_models.Photo.objects
        brand_manager = brand_models.Brand.objects
        caption = brand + "_logo"
        try:
            brand = brand_manager.get(name=brand)
            photo_manager.get(caption=caption)
        except brand_models.Photo.DoesNotExist:
            photo_manager.create(file=photo, brand=brand, caption=caption)
            print("Add photo: ", caption)
        except brand_models.Brand.DoesNotExist as e:
            print("Brand does not Exist: ", e)

    def add_brand(self, name, link, description):
        manager = brand_models.Brand.objects
        try:
            manager.get(name=name)
        except brand_models.Brand.DoesNotExist:
            manager.create(name=name, link=link, description=description)
            print("Add brand: ", name)

    def add_line_to_db(self, line: tuple):
        name, link, description = line
        photo = self.get_image_path(name)
        self.add_brand(name, link, description)
        self.add_photo(brand=name, photo=photo)

    def read_csv(self):
        cur_dir = os.path.dirname(__file__)
        self.my_db_dir = os.path.join(cur_dir, "my_db")
        brand_csv = os.path.join(self.my_db_dir, "brands.csv")
        with open(brand_csv, mode="r", encoding="utf-8") as f:
            reader = csv.reader(f)
            for line in reader:
                self.add_line_to_db(tuple(line))

    def list_brands(self):
        brands = brand_models.Brand.objects.all()
        for brand in brands:
            print(brand)

    def handle(self, *args, **options):
        if options["list"]:
            self.list_brands()
        else:
            self.read_csv()
