# Generated by Django 3.1.3 on 2021-02-14 00:53

import datetime

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ("cardpicker", "0002_auto_20210120_2349"),
    ]

    operations = [
        migrations.AddField(
            model_name="source",
            name="date",
            field=models.DateTimeField(default=datetime.datetime.now),
        ),
    ]
