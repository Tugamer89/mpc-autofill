# Generated by Django 3.0.8 on 2021-04-04 14:43

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ("cardpicker", "0006_auto_20210405_0037"),
    ]

    operations = [
        migrations.AlterField(
            model_name="source",
            name="drivename",
            field=models.CharField(max_length=100, unique=True),
        ),
    ]
