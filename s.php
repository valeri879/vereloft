<?php //if(!action) die( "Access Denied.");?>
<form action="" method="post">


    <!-- FEATURES -->
    <section class="features" id="anch-features">
        <div class="container">
            <div class="r1 row">

                <!-- Block 1 -->
                <div class="container">
                    <div class="text-content" align="center">
                        <!-- <h4> მართვის მოწმობის <span class="light">ხმოვანი</span> ტესტები.</h4> -->
                    </div>
                    <?php include( 'modules/assets/menu.php');?>
                    <div class="page-tickets-list">
                        <div class="tickets-list">
                            <br />
                            <br />
                            <table class="start_table" align="center">
                                <tr>
                                    <td colspan="2">
                                        <?php if(isset($_POST[ 'start'])){$exam->start_testing($_POST['category'],$_POST['quantity']);}?>
                                        <h3 class="spo-label">მართვის მოწმობის კატეგორია:</h3>
                                        <select name="category" class="form-control">
                                            <?php $cquery_category=m ysql_query( "SELECT id,title FROM category where id !=1 order by id asc"); while($category=m ysql_fetch_array($cquery_category)) { $style='' ; if($category[ 'id']==1){$style='style="display:none;"' ;} echo '<option value="'.$category[ 'id']. '">'.$category[ 'title']. '</option>'; } ?>
                                        </select>
                                    </td>
                                </tr>
                                <tr>
                                    <td valign="bottom" class="ticket">გამოცდისას ბარდება
                                        <br /> 30-ბილეთიანი ტესტი</td>
                                    <td valign="top" width="120">
                                        <h5>კითხვების რაოდენობა:</h5>
                                        <input id="question-quantity" name="quantity" value="30" type="text" maxlength="2" onkeypress="return event.charCode >= 48 && event.charCode <= 57">
                                    </td>
                                </tr>
                                <tr>
                                    <td colspan="2">
                                        <button type="submit" id="start" name="start">გამოცდის დაწყება</button>
                                    </td>
                                </tr>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

</form>