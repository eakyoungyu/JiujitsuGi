from django.urls import path
from brands import views as brand_views

app_name = "core"

urlpatterns = [
    path("", brand_views.HomeView.as_view(), name="home"),
]
