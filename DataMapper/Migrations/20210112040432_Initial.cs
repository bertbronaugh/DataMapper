using Microsoft.EntityFrameworkCore.Migrations;

namespace DataMapper.Migrations
{
    public partial class Initial : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "DataMap",
                columns: table => new
                {
                    DataMapId = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    CustNo = table.Column<int>(nullable: false),
                    Table = table.Column<string>(nullable: true),
                    Data1Value = table.Column<string>(nullable: true),
                    Data1Description = table.Column<string>(nullable: true),
                    Data2Value = table.Column<string>(nullable: true),
                    Data2Description = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_DataMap", x => x.DataMapId);
                });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "DataMap");
        }
    }
}
