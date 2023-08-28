# Generated by Django 4.2.4 on 2023-08-28 10:02

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion
import uuid


class Migration(migrations.Migration):

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
        ('streamlist', '0002_streamlist_video_created_at_streamvideo_and_more'),
    ]

    operations = [
        migrations.CreateModel(
            name='MediaConvertJob',
            fields=[
                ('id', models.UUIDField(default=uuid.uuid4, editable=False, primary_key=True, serialize=False)),
                ('created_at', models.DateTimeField(auto_now_add=True)),
                ('job_id', models.CharField(max_length=100)),
                ('status', models.CharField(choices=[('Q', 'Queued'), ('P', 'Progressing'), ('I', 'Input Information'), ('C', 'Completed'), ('E', 'Error')], default='Q', max_length=1)),
                ('error_message', models.CharField(blank=True, max_length=1000, null=True)),
                ('stream_list', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='streamlist.streamlist')),
                ('user', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL)),
            ],
        ),
    ]
