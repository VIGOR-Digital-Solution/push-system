BEGIN TRY

BEGIN TRAN;

-- CreateTable
CREATE TABLE [dbo].[StatusEnum] (
    [value] NVARCHAR(1000) NOT NULL,
    CONSTRAINT [StatusEnum_value_key] UNIQUE NONCLUSTERED ([value])
);

-- CreateTable
CREATE TABLE [dbo].[Warning] (
    [id] UNIQUEIDENTIFIER NOT NULL CONSTRAINT [Warning_id_df] DEFAULT newid(),
    [ref] NVARCHAR(1000) NOT NULL,
    [status] NVARCHAR(1000),
    [createdAt] DATETIME2 NOT NULL CONSTRAINT [Warning_createdAt_df] DEFAULT CURRENT_TIMESTAMP,
    [updatedAt] DATETIME2 NOT NULL,
    CONSTRAINT [Warning_pkey] PRIMARY KEY CLUSTERED ([id]),
    CONSTRAINT [Warning_ref_key] UNIQUE NONCLUSTERED ([ref])
);

-- CreateTable
CREATE TABLE [dbo].[Setting] (
    [id] UNIQUEIDENTIFIER NOT NULL CONSTRAINT [Setting_id_df] DEFAULT newid(),
    [refTitle] NVARCHAR(1000) NOT NULL,
    [title] NVARCHAR(1000),
    [description] NVARCHAR(1000),
    [value] DECIMAL(20,2),
    [createdAt] DATETIME2 NOT NULL CONSTRAINT [Setting_createdAt_df] DEFAULT CURRENT_TIMESTAMP,
    [updatedAt] DATETIME2 NOT NULL,
    CONSTRAINT [Setting_pkey] PRIMARY KEY CLUSTERED ([id]),
    CONSTRAINT [Setting_refTitle_key] UNIQUE NONCLUSTERED ([refTitle])
);

-- AddForeignKey
ALTER TABLE [dbo].[Warning] ADD CONSTRAINT [Warning_status_fkey] FOREIGN KEY ([status]) REFERENCES [dbo].[StatusEnum]([value]) ON DELETE SET NULL ON UPDATE CASCADE;

COMMIT TRAN;

END TRY
BEGIN CATCH

IF @@TRANCOUNT > 0
BEGIN
    ROLLBACK TRAN;
END;
THROW

END CATCH
