# Generated by Django 4.0.2 on 2022-02-14 17:13

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('brands', '0003_alter_brand_gis'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='brand',
            name='gis',
        ),
    ]
