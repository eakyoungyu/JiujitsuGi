from django.contrib import admin
from django.utils.html import mark_safe
from . import models


@admin.register(models.Photo)
class PhotoAdmin(admin.ModelAdmin):

    """Photo Admin Definition"""

    list_display = ("__str__", "get_thumbnail")

    def get_thumbnail(self, obj):
        return mark_safe(f"<img width='50px'src='{obj.file.url}'/>")

    get_thumbnail.short_description = "Thumbmail"


class PhotoInline(admin.TabularInline):

    model = models.Photo


@admin.register(models.Brand)
class BrandAdmin(admin.ModelAdmin):

    """Brand Admin Definition"""

    inlines = (PhotoInline,)

    list_display = (
        "name",
        "link",
    )

    search_fields = ("name",)
    ordering = ("name",)
