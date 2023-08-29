# Generated by Django 4.2.4 on 2023-08-29 09:47

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('streamlist', '0006_remove_mediaconvertjob_user_streamlist_status_and_more'),
    ]

    operations = [
        migrations.AddField(
            model_name='streamvideo',
            name='duration_in_ms',
            field=models.PositiveIntegerField(default=0),
            preserve_default=False,
        ),
        migrations.AlterField(
            model_name='streamlist',
            name='status',
            field=models.CharField(choices=[('Q', 'Queued'), ('P', 'Processing'), ('R', 'Ready'), ('E', 'Error')], default='Q', max_length=1),
        ),
        migrations.AlterField(
            model_name='streamvideo',
            name='stream_list',
            field=models.OneToOneField(on_delete=django.db.models.deletion.CASCADE, to='streamlist.streamlist'),
        ),
    ]