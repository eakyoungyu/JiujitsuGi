from . import models


def brand_list(request):
    brands = models.Brand.objects.all()
    print(brands)
    return {"brands": brands}
