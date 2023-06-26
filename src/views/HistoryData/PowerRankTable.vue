<template>
<b-card body-class="p-0" header-class="border-0">
    <template v-slot:header>
        <b-row align-v="center">
            <b-col>
                <h3 class="mb-0">发电功率历史排名</h3>
            </b-col>
            <b-col class="text-right">
                <base-button size="sm" type="primary">1Y</base-button>
                <base-button size="sm" type="primary">1Q</base-button>
                <base-button size="sm" type="primary">1M</base-button>
            </b-col>
        </b-row>
    </template>

    <el-table class="table-responsive table" :data="tableData" header-row-class-name="thead-light">

        <el-table-column type="index" width="80px" label="排名">
        </el-table-column>

        <el-table-column label="风机型号" min-width="115px" prop="fanType">
            <template v-slot="{row}">
                <div class="font-weight-600">{{row.fanType}}</div>
            </template>
        </el-table-column>

        <el-table-column label="最高发电功率" min-width="110px" prop="maxPower" sortable="true">
        </el-table-column>

        <el-table-column label="平均发电功率" min-width="110px" prop="averagePower" sortable="true">
        </el-table-column>

    </el-table>
</b-card>

</template>

<script>
import {
    BaseProgress
} from '@/components';
import {
    Table,
    TableColumn,
    DropdownMenu,
    DropdownItem,
    Dropdown
} from 'element-ui'
export default {
    name: 'power-rank-table',
    components: {
        BaseProgress,
        [Table.name]: Table,
        [TableColumn.name]: TableColumn,
        [Dropdown.name]: Dropdown,
        [DropdownItem.name]: DropdownItem,
        [DropdownMenu.name]: DropdownMenu,
    },
    data() {
        return {
            tableData: [{
                    fanType: 'Facebook',
                    maxPower: '1,480',
                    averagePower: 60,
                    progressType: 'gradient-danger',
                },
                {
                    fanType: 'Facebook',
                    maxPower: '1,480',
                    averagePower: 60,
                    progressType: 'gradient-success',
                },
                {
                    fanType: 'Facebook',
                    maxPower: '1,480',
                    averagePower: 60,
                    progressType: 'gradient-primary',
                },
                {
                    fanType: 'Facebook',
                    maxPower: '1,480',
                    averagePower: 60,
                    progressType: 'gradient-info',
                },
                {
                    fanType: 'Facebook',
                    maxPower: '1,480',
                    averagePower: 60,
                    progressType: 'gradient-warning',
                }
            ]
        }
    }

}
</script>

<style>
  </style>
