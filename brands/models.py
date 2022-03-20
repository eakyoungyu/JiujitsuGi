from django.db import models
from core import models as core_models


class Photo(core_models.TimeStampedModel):

    """Photo Model Definition"""

    caption = models.CharField(max_length=80)
    file = models.ImageField(upload_to="brand_photos")
    brand = models.ForeignKey("Brand", related_name="photos", on_delete=models.CASCADE)

    def __str__(self):
        return self.caption


class Brand(core_models.TimeStampedModel):

    """Brand Model Definition"""

    name = models.CharField(max_length=100)
    link = models.URLField()
    description = models.CharField(max_length=400, default=name)

    def __str__(self):
        return self.name

    def first_photo(self):
        (photo,) = self.photos.all()[:1]
        return photo.file.url
