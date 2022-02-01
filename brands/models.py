from django.db import models
from core import models as core_models
from gis import models as gi_models


class Brand(core_models.TimeStampedModel):

    """Brand Model Definition"""

    name = models.CharField(max_length=100)
    gis = models.ManyToManyField("gis.Gi", related_name="gis", blank=True, null=True)
    link = models.URLField()
