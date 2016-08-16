namespace MVC.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class PlacemodeladdedAddressproperty : DbMigration
    {
        public override void Up()
        {
            AddColumn("dbo.Places", "Address", c => c.String());
        }
        
        public override void Down()
        {
            DropColumn("dbo.Places", "Address");
        }
    }
}
