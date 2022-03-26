require "csv"

puts "1（新規でメモを作成） 2（既存のメモを編集する） 3（メモの内容を表示する）"
memo_type = gets.chomp.to_s

begin
	if memo_type == "1"
		puts "拡張子を除くファイル名を入力してください（ファイルは自動的にcsvファイルになります）"
		memo_file_name = gets.chomp.to_s

		puts "メモの内容を入力してください"
		memo_contents = gets.chomp.to_s

		File.open("#{memo_file_name}.csv","w") do |file|
			file.puts("#{memo_contents}")
		end

		puts "メモが作成されました"

	elsif memo_type == "2"
		puts "追記するファイル名を指定してください（拡張子は名称から除いてください）"
		memo_file_name = gets.chomp.to_s

		puts "追記するメモの内容を入力してください"
		memo_contents = gets.chomp.to_s

		File.open("#{memo_file_name}.csv","a") do |file|
			file.puts("#{memo_contents}")
  	end

		puts "メモが追加されました"

	elsif memo_type == "3"
		puts "閲覧するファイル名を指定してください（拡張子は名称から除いてください）"
		memo_file_name = gets.chomp.to_s

		File.open("#{memo_file_name}.csv","r") do |file|
			puts file.read
		end

	else
		puts "無効な入力です"

	end
rescue
	puts "正しく処理されませんでした。"
	puts "ファイル名が正しいか確認し、再度実行してください"
end


