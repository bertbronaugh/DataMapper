﻿// <auto-generated />
using System;
using DataMapper.Data;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;

namespace DataMapper.Migrations
{
    [DbContext(typeof(DataMapsContext))]
    [Migration("20210115020726_AddingFullVGIFields")]
    partial class AddingFullVGIFields
    {
        protected override void BuildTargetModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("ProductVersion", "3.1.10")
                .HasAnnotation("Relational:MaxIdentifierLength", 128)
                .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

            modelBuilder.Entity("DataMapper.Models.DataMap", b =>
                {
                    b.Property<int>("DataMapId")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int")
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<DateTime>("Created")
                        .HasColumnType("datetime2");

                    b.Property<int>("CustNo")
                        .HasColumnType("int");

                    b.Property<string>("Data1Description")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Data1Value")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Data2Description")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Data2Value")
                        .HasColumnType("nvarchar(max)");

                    b.Property<int>("DataIntValue")
                        .HasColumnType("int");

                    b.Property<string>("State")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Table")
                        .HasColumnType("nvarchar(max)");

                    b.Property<DateTime>("Updated")
                        .HasColumnType("datetime2");

                    b.HasKey("DataMapId");

                    b.ToTable("DataMap");
                });
#pragma warning restore 612, 618
        }
    }
}
