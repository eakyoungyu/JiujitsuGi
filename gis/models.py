from django.db import models
from core import models as core_model


class Photo(core_model.TimeStampedModel):

    """Photo Model Definition"""

    caption = models.CharField(max_length=80)
    file = models.ImageField(upload_to="gi_photos")
    gi = models.ForeignKey("Gi", related_name="photos", on_delete=models.CASCADE)

    def __str__(self):
        return self.caption


class Gi(core_model.TimeStampedModel):

    """Gi Model Definition"""

    name = models.CharField(max_length=150)
    brand = models.ForeignKey(
        "brands.Brand", related_name="gis", on_delete=models.CASCADE
    )
    link = models.URLField()
    price = models.IntegerField()

    def __str__(self):
        return f"{self.name} from {self.brand}"
